import { User, Roles } from './auth.constants'

export const USER_INITIAL_STATE: User = {
    id: 123456,
    nickName: 'Melkor',
    avatarURL: 'https://i.pravatar.cc/150?img=3',
    token: null,
    role: Roles.Visitor
}
