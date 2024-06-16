import { FC } from 'react'
import { styled } from '@linaria/react'
import { colors } from '../../styles/colors'
import { typography } from '../../styles/typography'

type AppButtonProps = {
  fontSize: string
  onClick?: () => void
  text: string
}

export const AppButton: FC<AppButtonProps> = ({ text, onClick, fontSize }) => (
  <>
    <Button onClick={onClick}>
      <Text fontSize={fontSize}>{text}</Text>
    </Button>
  </>
)

const Text = styled.span<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${typography.weight.bold};
  color: ${colors.light.black};
`

const Button = styled.button`
  background-color: ${colors.light.primary};
  padding: 10px 25px;
`