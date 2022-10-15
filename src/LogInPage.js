import React from "react";
import Button from '@material-ui/core/Button';

const LogInPage = () => {
  return (
    <div>
      <form>
        <div>
          <label>
            Full Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <label>
            Phone Number:
            <input type="tel" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div>
        <Button variant="contained" color="primary">
        Log In!
      </Button>
        </div>
    </form>
    </div>
  )
}

export default LogInPage;