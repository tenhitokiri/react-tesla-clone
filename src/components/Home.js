import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                bgImage="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                bgImage="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                bgImage="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                bgImage="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section 
                title="Solar Roof"
                description="Order Online for Touchless Delivery"
                bgImage="solar-roof.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
            <Section 
                title="Solar Panels"
                description="Order Online for Touchless Delivery"
                bgImage="solar-panel.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing inventory"
            />
        </div>
    )
}

export default Home