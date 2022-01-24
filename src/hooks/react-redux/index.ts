/** Dependencies **/
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/** Store **/
import { AppDispatch, RootState } from '../../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
