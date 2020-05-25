export default function(initialState: any) {
  const { role } = initialState;

  const guestPage = role === 'guest'
  const adminPage = role === 'admin'

  console.log('access', initialState);

  return {
    guestPage,
    adminPage,
  };
}
