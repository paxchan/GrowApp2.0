﻿// <auto-generated />
using System;
using GrowApp2._0.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GrowApp2._0.Migrations
{
    [DbContext(typeof(GrowDbContext))]
    [Migration("20250324232402_ChanningInitial")]
    partial class ChanningInitial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.13");

            modelBuilder.Entity("GrowApp2._0.Data.Accountability", b =>
                {
                    b.Property<int>("accountability_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("FriendshipId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("added_at")
                        .HasColumnType("TEXT");

                    b.Property<bool>("can_edit")
                        .HasColumnType("INTEGER");

                    b.Property<int>("friendship_id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("goal_id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("goal_id1")
                        .HasColumnType("INTEGER");

                    b.HasKey("accountability_id");

                    b.HasIndex("FriendshipId");

                    b.HasIndex("goal_id1");

                    b.ToTable("Accountabilities");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Friendship", b =>
                {
                    b.Property<int>("FriendshipId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId1")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId2")
                        .HasColumnType("INTEGER");

                    b.HasKey("FriendshipId");

                    b.HasIndex("UserId1");

                    b.ToTable("Friendships");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Goal", b =>
                {
                    b.Property<int>("goal_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("category")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("created_at")
                        .HasColumnType("TEXT");

                    b.Property<int?>("level")
                        .HasColumnType("INTEGER");

                    b.Property<string>("reason")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("user_id")
                        .HasColumnType("INTEGER");

                    b.HasKey("goal_id");

                    b.ToTable("Goals");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Post", b =>
                {
                    b.Property<int>("post_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("caption")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("goal_id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("goal_id1")
                        .HasColumnType("INTEGER");

                    b.Property<string>("photo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("posted_at")
                        .HasColumnType("TEXT");

                    b.Property<int>("user_id")
                        .HasColumnType("INTEGER");

                    b.HasKey("post_id");

                    b.HasIndex("goal_id1");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("GrowApp2._0.Data.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ProfilePhoto")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Weekday", b =>
                {
                    b.Property<int>("WeekdayId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DayName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("GoalId")
                        .HasColumnType("INTEGER");

                    b.HasKey("WeekdayId");

                    b.HasIndex("GoalId");

                    b.ToTable("Weekdays");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Accountability", b =>
                {
                    b.HasOne("GrowApp2._0.Data.Friendship", "Friendship")
                        .WithMany()
                        .HasForeignKey("FriendshipId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GrowApp2._0.Data.Goal", "Goal")
                        .WithMany()
                        .HasForeignKey("goal_id1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Friendship");

                    b.Navigation("Goal");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Friendship", b =>
                {
                    b.HasOne("GrowApp2._0.Data.User", "User1")
                        .WithMany("Friendships")
                        .HasForeignKey("UserId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User1");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Post", b =>
                {
                    b.HasOne("GrowApp2._0.Data.Goal", "Goal")
                        .WithMany()
                        .HasForeignKey("goal_id1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Goal");
                });

            modelBuilder.Entity("Weekday", b =>
                {
                    b.HasOne("GrowApp2._0.Data.Goal", "Goal")
                        .WithMany("Weekdays")
                        .HasForeignKey("GoalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Goal");
                });

            modelBuilder.Entity("GrowApp2._0.Data.Goal", b =>
                {
                    b.Navigation("Weekdays");
                });

            modelBuilder.Entity("GrowApp2._0.Data.User", b =>
                {
                    b.Navigation("Friendships");
                });
#pragma warning restore 612, 618
        }
    }
}
