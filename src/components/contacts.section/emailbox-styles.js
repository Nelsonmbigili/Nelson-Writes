import styled from 'styled-components';

export const EmailBoxContainer = styled.div`
  background-color: rgb(126, 123, 142);;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  height: auto;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  span {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-align: left;
`;

export const StyledInput = styled.input`
  outline: none !important;
  cursor: text;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background-color: rgba(25, 21, 21, 0.9);
  color: #f8f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledTextarea = styled.textarea`
  outline: none !important;
  cursor: text;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background-color: rgba(25, 21, 21, 0.9);
  color: #f8f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  resize: vertical;
  min-height: 200px;
`;

export const SubmitButton = styled.button`
  padding: 0.2rem;
  border: none;
  border-radius: 10px;
  background-color:  rgb(31, 24, 68);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 40px;
  width: 150px;
  transition: transform 0.8s ease;
  transform-origin: center center;
  &:hover {
    background-color:rgb(49, 41, 97);
    transform: scale(1.003);
  }
`;

export const CustomAlert = styled.div`
  padding: 10px 20px;
  margin: 15px 0;
  background-color: rgb(31, 24, 68);
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  animation: fadeIn 0.3s ease-in-out;

  &.success {
    background-color: rgb(31, 24, 68);
    color: white;
    border: 1px solid rgb(31, 24, 68);
  }

  &.error {
    background-color:rgb(31, 24, 68);
    color: white;
    border: 1px solidrgb(196, 77, 89);
  }
`;

export const ImageLink = styled.img`
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:hover {
    transform: scale(1.001);
    opacity: 0.8;
    }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-direction: row;
  text-align: center;
`;