import React from "react";
import { FormControl, Input, Button, InputLabel } from "@material-ui/core";

const MessageForm = ({ setInput, input, sendMessage }) => {
  return (
    <form className="app_form">
      <FormControl className="formControl">
        <InputLabel>Send Message..</InputLabel>
        <Input
          className="app_input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          onClick={sendMessage}
        >
          Send
        </Button>
      </FormControl>
    </form>
  );
};

export default MessageForm;
