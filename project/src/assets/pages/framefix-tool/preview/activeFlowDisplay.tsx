/* ActiveFlowDisplay.tsx */
import React from "react";
import styles from "./views.module.css";

export const ActiveFlowDisplay: React.FC<{ activeFlowName: string; activeIndex: number; }> = ({ activeFlowName, activeIndex }) => {
    if (activeIndex === -1) return null; // Only show when a flow is selected

    return (
        <div className={styles.viewBox}>
            <h3>Active Flow: {activeFlowName}</h3>
            {/* Further details and visualization */}
        </div>
    );
};