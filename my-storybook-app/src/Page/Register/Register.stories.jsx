import Register from "./Register";
// เปลี่ยนจาก @storybook/test เป็นตัวเลือกด้านล่างนี้
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest"; 
import { http, HttpResponse } from "msw";

export default {
  title: "RegisterForm",
  component: Register,
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        http.post("https://mockapi.io", () => {
          return HttpResponse.json(
            { message: "Register successful!" },
            { status: 200 }
          );
        }),
      ],
    },
  },
};

export const Default = {};

export const FilledState = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("name"), "John Doe", { delay: 100 });
    await userEvent.type(canvas.getByTestId("email"), "johndoe@example.com", {
      delay: 100,
    });
    await userEvent.type(canvas.getByTestId("phoneNumber"), "1234567890", {
      delay: 100,
    });
  },
};

export const ErrorState = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("email"), "invalid-email", {
      delay: 100,
    });
    // ใช้ getByRole เพื่อความแม่นยำตามมาตรฐาน Storybook
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));

    await expect(canvas.getByText("Email is invalid")).toBeInTheDocument();
    await expect(canvas.getByText("Name is required")).toBeInTheDocument();
    await expect(canvas.getByText("Phone number is required")).toBeInTheDocument();
  },
};

export const SuccessSubmit = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("name"), "John Doe");
    await userEvent.type(canvas.getByTestId("email"), "johndoe@example.com");
    await userEvent.type(canvas.getByTestId("phoneNumber"), "1234567890");

    await userEvent.click(canvas.getByRole("button", { name: /submit/i }));
  },
};
