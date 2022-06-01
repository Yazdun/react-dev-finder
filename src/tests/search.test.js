import { render, screen } from '@testing-library/react'
import { Search, Button } from '../components'
import { AppProvider } from '../context'

test('search input should be rendered', () => {
  render(
    <AppProvider>
      <Search />
    </AppProvider>,
  )
  const searchInputEl = screen.getByPlaceholderText(
    /search github username.../i,
  )
  expect(searchInputEl).toBeInTheDocument()
})

test('search input value should be empty on initial render', () => {
  render(
    <AppProvider>
      <Search />
    </AppProvider>,
  )
  const searchInputEl = screen.getByPlaceholderText(
    /search github username.../i,
  )
  expect(searchInputEl).toHaveValue('')
})

test('search button should be rendered', () => {
  render(
    <AppProvider>
      <Button />
    </AppProvider>,
  )
  const searchButtonEl = screen.getByTestId('search-button')
  expect(searchButtonEl).toBeInTheDocument()
})

test('search button text should be rendered correctly', () => {
  render(
    <AppProvider>
      <Button>search</Button>
    </AppProvider>,
  )
  const searchButtonEl = screen.getByTestId('search-button')
  expect(searchButtonEl).toHaveTextContent('search')
})

test('button should be disabled correctly', () => {
  render(
    <AppProvider>
      <Button disabled={true}>search</Button>
    </AppProvider>,
  )
  const searchButtonEl = screen.getByTestId('search-button')
  expect(searchButtonEl).toBeDisabled('search')
})
