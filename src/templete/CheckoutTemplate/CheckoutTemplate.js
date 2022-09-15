
import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../../Component/Header/Header";
import FooterHome from "../../Page/Home/Footer/FooterHome";
import Home from "../../Page/Home/Home";
import { USER_ND } from "../../Util/setting";
export const CheckoutTemplate = (props) => {
    let { Component, ...restProps } = props;

    // if (!localStorage.getItem(USER_ND)) {
    //     return <Redirect to="/login" />
    // }

    return <Route {...restProps} render={(propsRouter) => {
        return <Fragment>
            <Component {...propsRouter} />
        </Fragment>
    }} />
}