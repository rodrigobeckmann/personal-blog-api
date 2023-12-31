const handleError = (error) => {
  if (error.status) {
    return { status: error.status, data: { message: error.message } };
  } else {
    return { status: 500, data: { message: 'Something went wrong' } };
  }
}

module.exports = handleError;