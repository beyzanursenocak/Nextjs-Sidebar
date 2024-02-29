import React, {useMemo} from 'react'
import { LucideIcon } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation';


interface ISubItem {
    name: string;
    path: string;
    icon: LucideIcon;
  }

const SubMenuItem = ({item}: {item: ISubItem}) => {
    const {name, icon: Icon, path} = item
    const router = useRouter()
    const pathname = usePathname()

    const onClick = () => {
        router.push(path)
    }
    const isActive = useMemo(() => {
        return path === pathname
    }, [path, pathname])
  return (
    <div className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer    hover:text-sidebar-active ${isActive && 'text-sidebar-active font-semibold'}`}
    onClick={onClick}>
    <div className='flex items-center space-x-2'>
        <Icon  size={18} />
      <p className='text-sm'>{name}</p>
    </div>
    </div>
  )
}

export default SubMenuItem
