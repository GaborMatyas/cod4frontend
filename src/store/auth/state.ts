import { User, Roles } from './constants'

export const userInitialState: User = {
    id: 123456,
    nickName: 'Melkor',
    avatarURL: 'https://i.pravatar.cc/150?img=3',
    token: null,
    role: Roles.Visitor
}
