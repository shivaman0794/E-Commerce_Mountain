import React from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../Component/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state  = {
            collections :SHOP_DATA
        } 
    }


    render() {

        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherItemProps}) => (
                    <CollectionPreview key={id} {...otherItemProps} />))
                }
            </div>
        );
    }    
}

export default ShopPage;