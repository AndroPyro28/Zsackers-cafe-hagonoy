import React from 'react'
import FeaturedProducts from '../../../components/featured-products/FeaturedProducts'
import { IndexContainer, Intro, Content, CircleContainer, Circle, Inner } from './components'
function Index() {
    return (
        <IndexContainer>
            <Intro>
                <Content>
                    <p>Shake with Happiness</p>
                    <span>Best Tasting Donuts</span>
                </Content>

                <CircleContainer>
                    <Circle>
                        <Inner>
                            <i className="fa-solid fa-store icon"></i>
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                    <Circle>
                        <Inner>
                            <i className="fa-solid fa-store icon"></i>
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                    <Circle>
                        <Inner>
                            <i className="fa-solid fa-store icon"></i>
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                </CircleContainer>
            </Intro>

            <FeaturedProducts />
        </IndexContainer>
    )
}

export default Index