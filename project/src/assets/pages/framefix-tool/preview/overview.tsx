import React, { useState } from "react";
import { motion } from 'framer-motion';
import Styles from "./views.module.css";
import { ReactComponent as Flow } from "../../../img/icons/framefix-proto-view/flow-icon.svg";

type OverviewProps = {
    onFlowChange: (name: string, index: number) => void;
};

const Overview: React.FC<OverviewProps> = ({ onFlowChange }) => {
    const [flows, setFlows] = useState([
        { name: "Flow1" },
        { name: "Flow2" },
        { name: "Flow3" }
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleFlowClick = (index: number) => {
        setActiveIndex(index);
        onFlowChange(flows[index].name, index);
    };

    return (
        <motion.div
        initial={{ marginLeft: "-250px" }}
        animate={{ marginLeft: "0px" }}
        exit={{ marginLeft: "-250px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={Styles.sideViewContainer}
    >
        <div className={Styles.flows}>
            <div className={Styles.flowH}>
                <h4>Flows</h4>
            </div>
            <div className={Styles.flowList}>
                {flows.map((flow, index) => (
                    <div 
                        key={index} 
                        className={`${Styles.flow} ${Styles[`flow${index + 1}`]} ${index === activeIndex ? Styles.activeFlow : ""}`}
                        onClick={() => handleFlowClick(index)}
                    >
                        <Flow />
                        <p>{flow.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className={Styles.effects}>
            <div>
                <h4>Effects</h4>
            </div>
        </div>
    </motion.div>
    );
};

export default Overview;