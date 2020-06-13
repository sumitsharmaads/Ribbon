import React from 'react' ;

class Header extends React.Component{
    state ={borderName:"true"
    }
    render(){
        return(
            <div className="main-container">
                <div className="top-header">
                    <div className="left-top-header-content">
                        <div className="top-header-title">RIBBON</div>
                        <div className="verticle-line"></div>
                        <div className="top-header-search">
                            <input 
                                type="text" 
                                className="input-search-icon" 
                                autocomplete="off" 
                                placeholder="Search by SKU, Title or Description" 
                                value="" 
                                style={{border:(this.borderName ? 'none':'none'),borderBottom:(this.borderName ? '1px solid #000000':'1px solid #000000')}}
                                onClick={()=>this.setState({borderName:false})}
                            />
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Header;