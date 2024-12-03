"use client";
import React from "react";
import { Form } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import styles from "./DoSomethingForm.module.css";
import CustomBtn from "@/app/components/CustomBtn/CustomBtn";
import { MdOutlineEmail } from "react-icons/md";

const DoSomethingForm = ( {text} ) => {
  return (
    <Form className={`${styles.form} d-flex`}>
      <div className={`${styles.formContainer} position-relative d-flex`}>
        <MdOutlineEmail
          className={`${styles.searchIcon} fs-5 text-secondary position-absolute`}
        />
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className={`${styles.customInput} ps-5 pt-2 pb-2 pe-2`}
        />
        <div className={`${styles.btnContainer} position-absolute`}>
          <CustomBtn variant="primary" text={text} />
        </div>
      </div>
    </Form>
  );
};

export default DoSomethingForm;
