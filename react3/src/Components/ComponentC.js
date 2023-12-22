import React from "react";
import {Context,ChannelContext} from '../App'
import { useContext } from "react";

const ComponentC = ()=>{
    const user = useContext(Context)
    const Channel = useContext(ChannelContext)
    return (
        <div>
            <h1>
                {user} dvfvfv {Channel}
            </h1>

            <Context.Consumer>
                {(User) => {
                    return (
                        <ChannelContext.Consumer>
                            {(Channel) => {
                                return(
                                    <div>
                                        <h1>
                                            {User} {Channel}
                                        </h1>
                                    </div>
                                );
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </Context.Consumer>
        </div>
    );
};
export default  ComponentC;