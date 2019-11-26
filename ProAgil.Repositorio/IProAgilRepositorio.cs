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

        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventosAsyncByTema(string tema, bool includePalestratntes);
        Task<Evento[]> GetAllEventosAsync(bool includePalestratntes);
        Task<Evento> GetEventoAsyncById(int EventoId, bool includePalestratntes);

        // PALESTRANTE
        Task<Evento[]> GetAllPalestrantesAsyncByName(string nome, bool includePalestratntes);
        Task<Evento> GetPalestranteAsync(int palestranteId, bool includePalestratntes);
    } 
}