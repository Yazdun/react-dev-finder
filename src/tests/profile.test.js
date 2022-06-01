import { render, screen } from '@testing-library/react'
import { Profile } from '../components'
import dev from '../mocks/octocat.json'

test('profile image should load correctly', () => {
  render(<Profile {...dev} />)
  const profileImage = screen.getByTestId('profile-image')
  expect(profileImage).toHaveAttribute('src', dev.avatar_url)
})

test('profile title should be rendered correctly', () => {
  render(<Profile {...dev} />)
  const profileTitle = screen.getByTestId('profile-title')
  expect(profileTitle).toHaveTextContent(dev.name ? dev.name : dev.login)
})

test('github profile link should be rendered correctly', () => {
  render(<Profile {...dev} />)
  const profileGithubLink = screen.getByTestId('profile-github-link')
  expect(profileGithubLink).toHaveAttribute(
    'href',
    `https://github.com/${dev.login}`,
  )
})

test('github profile text should be rendered correctly', () => {
  render(<Profile {...dev} />)
  const profileGithubLink = screen.getByTestId('profile-github-link')
  expect(profileGithubLink).toHaveTextContent(`@${dev.login}`)
})
