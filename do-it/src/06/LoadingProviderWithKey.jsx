import React, { Component } from "react";
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey';
export const contextPropTypes = {
    loading : PropTypes.bool,
    setLoading : PropTypes.func
} //컨텍스트 자료형 정의

export default (contextKey = DEFAULT_KEY) => {
    class LoadingProvider extends Component{
        constructor(props){
            super(props);

            this.state = {loading : false};
            this.setLoading = this.setLoading.bind(this);
        }
        getChildContext(){
            return {
                [contextKey] : {
                    loading : this.state.loading,
                    setLoading : this.setLoading
                },
            };
        }
        setLoading(loading){
            this.setState( {loading} )
        }
        render(){
            return this.props.children;
        }
    }
    LoadingProvider.childContextType={
        [contextKey] : contextPropTypes
    };
    return LoadingProvider;
}
