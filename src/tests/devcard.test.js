import { render, screen } from '@testing-library/react'
import { DevCard } from '../components'
import dev from '../mocks/octocat.json'

test('dev card should be rendered on initial load', () => {
  render(<DevCard dev={dev} />)
  const devCardEl = screen.getByTestId('dev-card')
  expect(devCardEl).toBeInTheDocument()
})

test('dev card image should load correctly', () => {
  render(<DevCard dev={dev} />)
  const devCardImgEl = screen.getByTestId('dev-card-image')
  expect(devCardImgEl).toHaveAttribute('src', dev.avatar_url)
})

test("dev card bio's text should be rendered correctly", () => {
  render(<DevCard dev={dev} />)
  const devCardBioEl = screen.getByTestId('dev-card-bio')
  expect(devCardBioEl).toHaveTextContent(
    dev.bio ? dev.bio : 'This profile has no bio',
  )
})
