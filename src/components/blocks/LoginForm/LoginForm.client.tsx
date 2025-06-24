"use client";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function LoginFormClient() {
  return (
    <Container>
      <div className="max-w-[600px] mx-auto mt-24">
        <h3 className="mb-3 text-center">로그인</h3>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" />
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
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Col sm="12">
            <Button>로그인</Button>
          </Col>
        </Form>
      </div>
    </Container>
  );
}
