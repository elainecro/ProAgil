using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repositorio
{
    public interface IProAgilRepositorio
    {
        //GERAL
        void Add<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void DeleteRange<T>(T[] entity) where T: class;

        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventosAsyncByTema(string tema, bool includePalestrantes);
        Task<Evento[]> GetAllEventosAsync(bool includePalestrantes);
        Task<Evento> GetEventoAsyncById(int EventoId, bool includePalestrantes);

        // PALESTRANTE
        Task<Palestrante[]> GetAllPalestrantesAsyncByName(string nome, bool includeEventos);
        Task<Palestrante> GetPalestranteAsync(int palestranteId, bool includeEventos);
    } 
}