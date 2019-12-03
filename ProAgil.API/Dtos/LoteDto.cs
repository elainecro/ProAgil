using System.ComponentModel.DataAnnotations;

namespace ProAgil.API.Dtos
{
    public class LoteDto
    {
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public decimal Preco { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
        [Range(5,120000, ErrorMessage = "A quantidade de ingressos no lote deve ser entre 5 e 120000")]
        public int Quantidade { get; set; }
    }
}