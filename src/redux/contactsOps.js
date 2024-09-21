import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("https://66eeccaa3ed5bb4d0bf20009.mockapi.io/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
  try {
    const { data } = await axios.delete(`https://66eeccaa3ed5bb4d0bf20009.mockapi.io/contacts/${contactId}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkApi) => {
  try {
    const { data } = await axios.post("https://66eeccaa3ed5bb4d0bf20009.mockapi.io/contacts", contact);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
