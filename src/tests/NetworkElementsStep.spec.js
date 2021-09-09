import React from 'react'

import { render, fireEvent, screen } from './test-utils'
import { waitFor } from '@testing-library/react'

import NetworkElementsStep from '../components/NetworkElementStep'

const networkElements = {
  data: [{
    id: '0',
    ip: '10.10.10.10',
    type: 'eNodeB',
    dn: 'PLMN-PLMN/MRBTS-4321/LNBTS-01',
    name: 'MRBT_test_SM_AG',
    swVersion: 'SW_00323_92034_395'
  },
  {
    id: '1',
    ip: '10.128.32.14',
    type: 'eNodeB',
    dn: 'PLMN-PLMN/MRBTS-1/LNBTS-4',
    name: '5G_500%',
    swVersion: 'SW_03482_19342_102'
  },
  {
    id: '6',
    ip: '10.14.41.15',
    type: 'eNodeB',
    dn: 'PLMN-PLMN/MRBTS-241/LNBTS-41',
    name: '5G_500%',
    swVersion: 'SW_03482_19342_102'
  }]
}

describe('NetworkElementsStep', () => {
  test('select all', async () => {
    render(<NetworkElementsStep />, {
      preloadedState: {
        networkElements: networkElements,
        wizard: {
          selectedNetworkElements: []
        }
      }
    })

    expect(screen.getByText('PLMN-PLMN/MRBTS-4321/LNBTS-01')).toBeInTheDocument()
    // check if checkboxes are not selected
    let checkbox1 = screen.getByRole('checkbox', { name: '10.10.10.10 eNodeB PLMN-PLMN/MRBTS-4321/LNBTS-01' })
    let checkbox2 = screen.getByRole('checkbox', { name: '10.128.32.14 eNodeB PLMN-PLMN/MRBTS-1/LNBTS-4' })
    await waitFor(() => {
      expect(checkbox1).toHaveAttribute('aria-checked', 'false')
      expect(checkbox2).toHaveAttribute('aria-checked', 'false')
    })

    // click select all
    fireEvent.click(screen.getByRole('checkbox', { name: 'select all network elements' }))

    // check if checkboxes are selected
    checkbox1 = screen.getByRole('checkbox', { name: '10.10.10.10 eNodeB PLMN-PLMN/MRBTS-4321/LNBTS-01' })
    checkbox2 = screen.getByRole('checkbox', { name: '10.128.32.14 eNodeB PLMN-PLMN/MRBTS-1/LNBTS-4' })
    await waitFor(() => {
      expect(checkbox1).toHaveAttribute('aria-checked', 'true')
      expect(checkbox2).toHaveAttribute('aria-checked', 'true')
    })

    // click deselect all
    fireEvent.click(screen.getByRole('checkbox', { name: 'select all network elements' }))

    // check if checkboxes are not selected
    checkbox1 = screen.getByRole('checkbox', { name: '10.10.10.10 eNodeB PLMN-PLMN/MRBTS-4321/LNBTS-01' })
    checkbox2 = screen.getByRole('checkbox', { name: '10.128.32.14 eNodeB PLMN-PLMN/MRBTS-1/LNBTS-4' })
    await waitFor(() => {
      expect(checkbox1).toHaveAttribute('aria-checked', 'false')
      expect(checkbox2).toHaveAttribute('aria-checked', 'false')
    })
  })

  test('uncheck first checked', () => {
    render(<NetworkElementsStep />, {
      preloadedState: {
        networkElements: networkElements,
        wizard: {
          selectedNetworkElements: ['0', '1', '6']
        }
      }
    })
    const firstElement = screen.getByRole('checkbox', { name: '10.10.10.10 eNodeB PLMN-PLMN/MRBTS-4321/LNBTS-01' })
    expect(firstElement).toHaveAttribute('aria-checked', 'true')
    fireEvent.click(firstElement)
    expect(firstElement).toHaveAttribute('aria-checked', 'false')
  })

  test('uncheck middle checked', () => {
    render(<NetworkElementsStep />, {
      preloadedState: {
        networkElements: networkElements,
        wizard: {
          selectedNetworkElements: ['0', '1', '6']
        }
      }
    })
    const middleElement = screen.getByRole('checkbox', { name: '10.128.32.14 eNodeB PLMN-PLMN/MRBTS-1/LNBTS-4' })
    expect(middleElement).toHaveAttribute('aria-checked', 'true')
    fireEvent.click(middleElement)
    expect(middleElement).toHaveAttribute('aria-checked', 'false')
  })

  test('uncheck last checked', () => {
    render(<NetworkElementsStep />, {
      preloadedState: {
        networkElements: networkElements,
        wizard: {
          selectedNetworkElements: ['0', '1', '6']
        }
      }
    })
    const lastElement = screen.getByRole('checkbox', { name: '10.14.41.15 eNodeB PLMN-PLMN/MRBTS-241/LNBTS-41' })
    expect(lastElement).toHaveAttribute('aria-checked', 'true')
    fireEvent.click(lastElement)
    expect(lastElement).toHaveAttribute('aria-checked', 'false')
  })
})
