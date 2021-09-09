import React from 'react'

import { render, fireEvent, screen } from './test-utils'
import { waitForElementToBeRemoved } from '@testing-library/react'

import ScheduleToast from '../components/ScheduleToast'

describe('Toast', () => {
  test('hide on click', async () => {
    render(<ScheduleToast />, {
      preloadedState: {
        wizard: {
          toast: {
            open: true,
            success: true
          }
        }
      }
    })
    await screen.findAllByText('Successfully scheduled the operation!')
    fireEvent.click(screen.getByRole('button'))
    await waitForElementToBeRemoved(() => screen.queryByText('Successfully scheduled the operation!'))
  })

  test('dont hide on clickaway', async () => {
    render(<ScheduleToast />, {
      preloadedState: {
        wizard: {
          toast: {
            open: true,
            success: true
          }
        }
      }
    })
    await screen.findAllByText('Successfully scheduled the operation!')
    fireEvent.click(document)
    await screen.findAllByText('Successfully scheduled the operation!')
  })
})
