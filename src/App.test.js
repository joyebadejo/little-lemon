import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingPage, { updateTimes } from './components/BookingPage';
import { timeReducer, initializeTimes } from './components/BookingPage';
import { useEffect } from 'react';
// import { updateTimes } from './components/BookingPage';
import { fetchAPI, submitAPI } from './mockAPI';

const testReducer = timeReducer;

test('Load Booking Page', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // const bookingsLink = screen.getByText('Reservations');
  const bookingsLink = screen.getByTestId("bookingsLink");
  fireEvent.click(bookingsLink);
  const bookingHeader = screen.getByRole("heading");
  expect(bookingHeader).toHaveTextContent("Reserve a table!")
});

test('Test init time function', async () => {
  
  let today = new Date();
  today = today.toLocaleDateString("en-US", {year: "numeric", month: "2-digit",day: "2-digit"})
  let todayArray = today.split("/")
  let todayString = `${todayArray[2]}`+"-"+`${todayArray[0]}`+"-"+`${todayArray[1]}`
  const data = await fetchAPI(todayString)

  const initFunction = initializeTimes(data);
  expect(initFunction).toStrictEqual(["14:00", "15:00", "17:00"])
})

test('Test update time functions', async () => {
  // expect(timeReducer.dispatch({ type: 'increment' })).toBe(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
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
  // expect(guestInput.value).toBe("12")
  // userEvent.type(guestInput, "12")
  const bookingHeader = screen.getByRole("heading");
  fireEvent.click(bookingHeader);
  // // console.log(guestTest.innerHTML)
  const submit = screen.getByTestId("submitBtn")
  expect(submit.closest('button')).toBeDisabled;

  // const guestTest = screen.getByTestId("guestTest")
  // console.log("Logging...")
  // console.log(guestTest)
  // expect(guestTest).toHaveTextContent("Please enter a party size between 1 -10.")
  // await new Promise((r) => setTimeout(r, 2000));
  // expect(screen.getByText(`Please enter a party size between 1 -10.`)).toBeInTheDocument()
});

test('valid form', async () => {
  render(<App />);
  const bookingsLink = screen.getByTestId("bookingsLink");
  fireEvent.click(bookingsLink);
  const dateInput = screen.getByTestId("guestInput")
  fireEvent.change(dateInput, { target: { value: "10/10/2023" } })
  const timeInput = screen.getByTestId("guestInput")
  fireEvent.change(timeInput, { target: { value: "14:00" } })
  const nameInput = screen.getByTestId("guestInput")
  fireEvent.change(nameInput, { target: { value: "test" } })
  const guestInput = screen.getByTestId("guestInput")
  fireEvent.change(guestInput, { target: { value: 8 } })
  // expect(guestInput.value).toBe("12")
  // userEvent.type(guestInput, "12")
  const bookingHeader = screen.getByRole("heading");
  fireEvent.click(bookingHeader);
  // // console.log(guestTest.innerHTML)
  const submit = screen.getByTestId("submitBtn")
  expect(submit.closest('button')).toBeEnabled;

  // const guestTest = screen.getByTestId("guestTest")
  // console.log("Logging...")
  // console.log(guestTest)
  // expect(guestTest).toHaveTextContent("Please enter a party size between 1 -10.")
  // await new Promise((r) => setTimeout(r, 2000));
  // expect(screen.getByText(`Please enter a party size between 1 -10.`)).toBeInTheDocument()
});