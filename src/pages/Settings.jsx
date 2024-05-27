import React from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";

const SettingsContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #343a40;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #495057;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  color: #495057;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  color: #495057;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  color: #495057;
  box-sizing: border-box;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

function Settings() {
  return (
    <SettingsContainer>
      <Heading as="h1">Cài đặt quán cà phê</Heading>
      <Section>
        <SectionTitle>Thông tin cơ bản</SectionTitle>
        <FormGroup>
          <Label htmlFor="cafeName">Tên quán:</Label>
          <Input type="text" id="cafeName" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Địa chỉ:</Label>
          <Input type="text" id="address" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Số điện thoại:</Label>
          <Input type="text" id="phoneNumber" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Mô tả:</Label>
          <Textarea id="description" rows="4" />
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>Cài đặt sản phẩm và danh mục</SectionTitle>
        <FormGroup>
          <Label htmlFor="productCategory">Danh mục sản phẩm:</Label>
          <Select id="productCategory">
            <option value="coffee">Cà phê</option>
            <option value="tea">Trà</option>
            <option value="snacks">Đồ ăn nhẹ</option>
          </Select>
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>Giờ hoạt động</SectionTitle>
        <FormGroup>
          <Label htmlFor="openingHours">Giờ mở cửa:</Label>
          <Input type="text" id="openingHours" placeholder="Ví dụ: 7:00 AM - 10:00 PM" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="daysOpen">Ngày mở cửa:</Label>
          <Input type="text" id="daysOpen" placeholder="Ví dụ: Thứ 2 - Chủ Nhật" />
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>Cài đặt giao diện</SectionTitle>
        <FormGroup>
          <Label htmlFor="theme">Chọn chủ đề:</Label>
          <Select id="theme">
            <option value="light">Chế độ sáng</option>
            <option value="dark">Chế độ tối</option>
          </Select>
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>Thông báo</SectionTitle>
        <FormGroup>
          <Label>
            <Checkbox type="checkbox" id="emailNotifications" /> Nhận thông báo qua email
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox type="checkbox" id="smsNotifications" /> Nhận thông báo qua SMS
          </Label>
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>Cài đặt chung</SectionTitle>
        <Button>Lưu cài đặt</Button>
      </Section>
    </SettingsContainer>
  );
}

export default Settings;
