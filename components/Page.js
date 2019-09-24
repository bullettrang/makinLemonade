import React,{Component} from 'react';
import Meta from './Meta';
import styled from 'styled-components';
import Header from './Header';
const StyledPage = styled.div`
    background:white;
    color:'#393939';
`;

const Inner = styled.div`
    /* max-width:1000px; */
    /* margin: 0 auto; */
    margin:0 auto;
`;
export default class Page extends Component{
    render(){
        return(
                <StyledPage>
                    <Meta/>   {/*Uses Next's Head */}
                    <Header/> {/*Uses Next's Router, Link */}
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
        )
    }
}