import { motion } from "framer-motion";
function JudgeFeedback({ feedback }) {
  
    if (!feedback) return null;

    return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Wrap adjacent elements here */}
    <> 
      <h2>Judge Feedback</h2>
      <ul>
        {feedback.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  </motion.div>
);

}

export default JudgeFeedback;