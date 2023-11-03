import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => handlePending(state));
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) =>
      handleRejected(state, action)
    );
    builder.addCase(addContact.pending, state => handlePending(state));
    builder.addCase(addContact.rejected, (state, action) =>
      handleRejected(state, action)
    );
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) =>
      handleRejected(state, action)
    );
    builder.addCase(updateContact.fulfilled, (state, action) => {
      console.log(action);
      state.error = null;
      state.isLoading = false;
      state.items = state.items.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
