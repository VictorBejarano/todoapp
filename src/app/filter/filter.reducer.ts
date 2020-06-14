import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function fitroReducer(
    state: fromFiltro.filtrosValidos = estadoInicial,
    action: fromFiltro.acciones
): fromFiltro.filtrosValidos {
    switch (action.type) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}
