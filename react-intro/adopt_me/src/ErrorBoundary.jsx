import { Component } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
      <h2>
        There was ana error with this listing. <Link to="/">Click here to go back to the homepage.</Link>
      </h2>
      )
    }
  }
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary