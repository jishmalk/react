// import React, { useContext } from 'react'
import { Context,ChannelContext } from '../App'

const ComponentA = () => {
    // const user = useContext(Context)
    // const Channel = useContext(ChannelContext)
  return (
    <div>
        <Context.Consumer>
            {(user)=>{
                return(
                    <ChannelContext.Consumer>
                        {(Channel)=>{
                            return(
                                <div>
                                    <h1>
                                        {user} {Channel}
                                    </h1>
                                </div>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </Context.Consumer>
    </div>
  )
}

export default ComponentA;
