import React, { useContext, Fragment, useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import AuthContext from "../../context/auth/authContext";
import authContext from "../../context/auth/authContext";

const Question = (props) => {
    const authContext = useContext(AuthContext);
    const {questions} = authContext;

}

