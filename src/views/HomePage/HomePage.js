import React from 'react';
import { useSelector } from 'react-redux';
import Section from "../../components/Section/Section";
import {getUserEmail} from '../../redux/auth/auth-selectors'

export const HomePage = () => {
  const user = useSelector(getUserEmail)
  return (
      <Section title={`Привет, ${user}`}></Section>
  )

};
