import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingPage, { updateTimes } from './components/BookingPage';
import { timeReducer, initializeTimes } from './components/BookingPage';
import { useEffect } from 'react';
import { fetchAPI, submitAPI } from './mockAPI';

const testReducer = timeReducer;

test('Load Booking Page', () => {
  render(<App />);
  const bookingsLink = screen.getByTestId("bookingsLink");
  fireEvent.click(bookingsLink);
  expect(screen.getByText("Join us for a meal!")).toBeInTheDocument()
});

test('Test init time function', async () => {
  
  let today = new Date();
  today = today.toLocaleDateString("en-US", {year: "numeric", month: "2-digit",day: "2-digit"})
  let todayArray = today.split("/")
  let todayString = `${todayArray[2]}`+"-"+`${todayArray[0]}`+"-"+`${todayArray[1]}`
  const data = await fetchAPI(todayString)

  const initFunction = initializeTimes(data);
  expect(initFunction).not.toStrictEqual([])
})

test('Test update time functions', async () => {
  const data = await fetchAPI("2023-10-19")
  const updateFunction = updateTimes(data);
  expect(updateFunction).toStrictEqual(["","10:00", "11:00", "12:00"])
})

test('invalid form', async () => {
  render(<App />);
  const bookingsLink = screen.getByTestId("bookingsLink");
  fireEvent.click(bookingsLink);
  const guestInput = screen.getByTestId("guestInput")
  fireEvent.change(guestInput, { target: { value: 12 } })
  const bookingHeader = screen.getByText("Join us for a meal!");
  fireEvent.click(bookingHeader);
  const submit = screen.getByTestId("submitBtn")
  expect(submit.closest('button')).toBeDisabled;

});

test('valid form', async () => {
  render(<App />);
  const bookingsLink = screen.getByTestId("bookingsLink");
  fireEvent.click(bookingsLink);
  const dateInput = screen.getByTestId("dateInput")
  fireEvent.change(dateInput, { target: { value: "10/10/2023" } })
  const timeInput = screen.getByTestId("timeInput")
  fireEvent.change(timeInput, { target: { value: "14:00" } })
  const nameInput = screen.getByTestId("nameInput")
  fireEvent.change(nameInput, { target: { value: "test" } })
  const guestInput = screen.getByTestId("guestInput")
  fireEvent.change(guestInput, { target: { value: 8 } })
  const emailInput = screen.getByTestId("emailInput")
  fireEvent.change(emailInput, { target: { value: "test@test.com" } })
  const bookingHeader = screen.getByText("Join us for a meal!");
  fireEvent.click(bookingHeader);
  const submit = screen.getByTestId("submitBtn")
  expect(submit.closest('button')).toBeEnabled;
});