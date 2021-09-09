import React from 'react'
import axios from 'axios'
import { render, fireEvent, screen } from './test-utils'
import { within } from '@testing-library/react'
import Wizard from '../Wizard'

jest.mock('axios')

describe('Wizard', () => {
  test('Render Wizard', () => {
    render(<Wizard />)
    expect(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01')).toBeInTheDocument()
  })

  describe('Network Elements step', () => {
    test('Continue button is disabled on no selected elements', () => {
      render(<Wizard />)
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
    })

    test('Continue button is enabled on selected elements', () => {
      render(<Wizard />)
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
      const row = screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01').closest('tr')
      fireEvent.click(row)
      expect(screen.getByText('Continue').closest('button')).not.toBeDisabled()
    })

    test('Cancel button is disabled', () => {
      render(<Wizard />)
      expect(screen.getByText('Cancel').closest('button')).toBeDisabled()
      const row = screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01').closest('tr')
      fireEvent.click(row)
      expect(screen.getByText('Cancel').closest('button')).toBeDisabled()
    })
  })

  describe('Operation Type step', () => {
    beforeEach(() => {
      // Go trough first step
      render(<Wizard />)
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
      fireEvent.click(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01').closest('tr'))
      fireEvent.click(screen.getByText('PLMN-PLMN/MRBTS-71/LNBTS-40').closest('tr'))
      fireEvent.click(screen.getByText('Continue'))
    })

    test('Downgrade button is disabled', () => {
      expect(within(screen.getByText('Downgrade Software').closest('.MuiPaper-root')).getByRole('checkbox')).toBeDisabled()
    })

    test('Continue button is disabled when no operation selected', () => {
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
    })

    test('Continue button is enabled on selected operation', () => {
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
      fireEvent.click(screen.getByText('Update Software'))
      expect(screen.getByText('Continue').closest('button')).not.toBeDisabled()
      // deselect checkbox
      fireEvent.click(screen.getByText('Update Software'))
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
    })

    test('Cancel button takes to first step and clears selections', () => {
      fireEvent.click(screen.getByText('Cancel'))
      expect(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01')).toBeInTheDocument()
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
    })

    test('Back button takes to first step', () => {
      fireEvent.click(screen.getByText('Back'))
      expect(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01')).toBeInTheDocument()
      expect(screen.getByText('Continue').closest('button')).not.toBeDisabled()
    })
  })

  describe('Summary step', () => {
    beforeEach(() => {
      // Go trough first step
      render(<Wizard />)
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
      fireEvent.click(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01').closest('tr'))
      fireEvent.click(screen.getByText('PLMN-PLMN/MRBTS-71/LNBTS-40').closest('tr'))
      fireEvent.click(screen.getByText('Continue'))
      // Go trough second step
      fireEvent.click(screen.getByText('Update Software'))
      fireEvent.click(screen.getByText('Continue'))
    })

    test('Cancel button takes to first step and clears selections', () => {
      fireEvent.click(screen.getByText('Cancel'))
      expect(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01')).toBeInTheDocument()
      expect(screen.getByText('Continue').closest('button')).toBeDisabled()
    })

    test('Back button takes to the second step', () => {
      fireEvent.click(screen.getByText('Back'))
      expect(screen.getByText('Downgrade Software')).toBeInTheDocument()
      expect(screen.getByText('Continue').closest('button')).not.toBeDisabled()
    })

    test('Toast is showed on successfull schedule', async () => {
      axios.request.mockResolvedValue({ name: '1234', status: '200' })
      fireEvent.click(screen.getByText('Schedule'))
      await screen.findAllByText('Successfully scheduled the operation!')
    })

    test('Toast is showed on schedule error', async () => {
      axios.request.mockRejectedValue(new Error('Network error'))
      fireEvent.click(screen.getByText('Schedule'))
      await screen.findAllByText('Something went wrong!')
    })
  })
})
