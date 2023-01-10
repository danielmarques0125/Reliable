import React from 'react'

export const Sidebar=()=>{
    return(
        <div className='Sidebarbox'>
            <div className='logo'>
                <img className='logoimage' src={require('./logo.PNG')} height={45} width={128}></img>
            </div>
            
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/dashboard.png')} /><p className='menutext'>Dashboard</p>
            </div>
            </div>
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/product.png')} /><p className='menutext'>Products / Services</p>
            </div>
            </div>
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/order.png')} /><p className='menutext'>Orders</p>
            </div>
            <div className='menu order'>
            <div className='menuitems order'>
            <img className='menuicons arrow' src={require('./assets/icon/arrow.png')} /><p className='menutext order'>Active </p><p className='menutext order action'>1</p>
            </div>
            </div>
            <div className='menu order'>
            <div className='menuitems order'>
            <img className='menuicons arrow' src={require('./assets/icon/arrow.png')} /><p className='menutext order'>Suspended </p><p className='menutext order Suspended'>1</p>
            </div>
            </div>
            <div className='menu order'>
            <div className='menuitems order'>
            <img className='menuicons arrow' src={require('./assets/icon/arrow.png')} /><p className='menutext order'>Pending </p><p className='menutext order Pending'>1</p>
            </div>
            </div>
            <div className='menu order'>
            <div className='menuitems'>
  <label class="menutext">Show Cancelled Services &nbsp;</label>
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
</div></div></div>
<div className='menu order'>
            <div className='menuitems Cancelled'>
            <img className='menuicons arrow' src={require('./assets/icon/arrow.png')} /><p className='menutext Cancelled'>Pending </p><p className='menutext order Cancelled'>1</p>
            </div>
            </div>
            </div>
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/billing.png')} /><p className='menutext'>Billing</p>
            </div>
            </div>
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/support.png')} /><p className='menutext'>Support</p>
            </div>
            </div>
            <div className='menu'>
            <div className='menuitems'>
            <img className='menuicons' src={require('./assets/icon/setting.png')} /><p className='menutext'>Settings</p>
            </div>
            </div>
        </div>

    )
}