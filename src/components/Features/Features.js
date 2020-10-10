import React from 'react';
import Items from '../Items/Items'

class Features extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
           return (
               <Items feature={feature} idx={idx} features={this.props.features} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
           );
        });
        return (
            <>
                {features}
            </>
        )
    }
}

export default Features;