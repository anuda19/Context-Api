import React, { Fragment } from "react";
import Provider from "./provider";
import MiContext from "./Context";

const Agents = () => {
    return <AgentFive />
}

const AgentFive = () => {
    return <Agentsix />
}

const Agentsix = () => {
    return <AgentBond />
}
const AgentBond = () => {
    return(
        <div>
            <MiContext.Consumer>
                {(context)=>(
                    <Fragment>
                        <h3>Agent Information</h3>
                        <p>Mission Name : {context.data.mname}</p>
                        <p>Agent Name : {context.data.agent}</p>
                        <p>Status : {context.data.accept}</p>

                    </Fragment>
                )}
            </MiContext.Consumer>
        </div>
    )
}

export default AgentBond;