export default function Page() {
  return (
    <div>
      <h1>signup</h1>
      <form>
        <div>
          email: <input type="text" name="email" />
        </div>
        <div>
          password: <input type="password" name="password" />
        </div>
        <div>
          new password: <input type="newpassword" name="newpassword" />
        </div>
        <div>
          <button type="submit" value="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}