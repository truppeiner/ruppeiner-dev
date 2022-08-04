import React from "react";
import { motion } from 'framer-motion';
import {Row, Col} from "react-bootstrap"

function About() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1 }}
        exit={{opacity: 0 }}>
        <div id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <Row>
                <Col>
                <p>test</p>
                </Col>
                <Col>
                    <Row>
                        <Col>
                        test
                        </Col>
                        <Col>
                        test
                        </Col>
                        <Col>
                        test
                        </Col>
                    </Row>
                    <Row>
                        test
                    </Row>
                </Col>

            </Row>
        </div>
        </motion.div>
    )
}

export default About;