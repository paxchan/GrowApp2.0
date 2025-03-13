var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

//Kate's part with the connection string & Dbcontext connection
// builder.Services.AddDbContext<GrowDbContext>(options =>
//     options.UseSqlite(builder.Configuration.GetConnectionString("GrowConnection")));
//"ConnectionStrings": {
//    "GrowConnection": "Data Source=Grow.sqlite"

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
