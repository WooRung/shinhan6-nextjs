"use client";
import { registerAction } from "@/services/auth-service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function RegisterFormClient() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const router = useRouter();

  const onSubmitRegister = async () => {
    try {
      const result = await registerAction(userInput);
      if (result) {
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div className="max-w-[600px] mx-auto mt-24">
        <h3 className="mb-3 text-center">회원가입</h3>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                onChange={(e) => {
                  setUserInput((prev) => ({ ...prev, email: e.target.value }));
                }}
                value={userInput.email}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                value={userInput.password}
              />
            </Col>
          </Form.Group>

          <Col sm="12">
            <Button onClick={() => onSubmitRegister()}>회원가입</Button>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
