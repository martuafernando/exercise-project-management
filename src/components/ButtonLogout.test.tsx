import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ButtonLogout } from "./ButtonLogout"

describe("Logout Button", () => {
  it("should render button correctly", () => {
    // Given
    render(<ButtonLogout />)

    // When
    const textButton = screen.getByRole("button")

    // Then
    expect(textButton).toBeDefined()
    expect(textButton).toBeInstanceOf(HTMLButtonElement)
  })
})